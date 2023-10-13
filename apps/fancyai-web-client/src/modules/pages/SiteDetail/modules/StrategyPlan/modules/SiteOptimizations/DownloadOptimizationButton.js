import React from 'react';
import PropTypes from 'prop-types';
import { useDownloadOptimizationCsvByTypeMutation } from 'apps/fancyai-web-client/src/core/api/apiOptimization';
import { Button, notification } from 'antd';
import { environment } from 'apps/fancyai-web-client/src/environments/environment';
import { useAuthUser } from '@crema/hooks/AuthHooks';

const DownloadOptimizationButton = ({ siteId, type }) => {
  const { apiToken } = useAuthUser()
  const url = `${environment.apiHost}/optimisations/download/${siteId}?optimisationType=${type}`
  const [isLoading, setIsLoading] = React.useState(false)

  return <Button onClick={() => {
    setIsLoading(true)

    // fetch from url using access token
    fetch(url, {
      headers: {
        'authorization': `Bearer ${apiToken}`
      }
    }).then(res => res.text()).then(res => {
      const link = document.createElement("a");
      const content = res;
      const file = new Blob([content], { type: 'text/plain' });
      link.href = URL.createObjectURL(file);
      link.download = `${type.split(" ").join("_")}.csv`;
      link.click();
      URL.revokeObjectURL(link.href);
      setIsLoading(false)
      notification.open({
        message: "Success",
        description: "Download Success",
        type: "success",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    }).catch(err => {
      notification.open({
        message: "Error",
        description: "Something went wrong, please try again later",
        type: "error",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
      setIsLoading(false)
    })
  }} loading={isLoading} type='primary'>Download</Button>
}

export default DownloadOptimizationButton