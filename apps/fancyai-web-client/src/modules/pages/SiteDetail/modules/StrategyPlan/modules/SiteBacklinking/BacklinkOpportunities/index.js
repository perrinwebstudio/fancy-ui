import React, { useMemo, useState } from 'react';
import { useGetBacklinkOpportunitiesQuery } from 'apps/fancyai-web-client/src/core/api/apiBacklink';
import { useSiteDetail } from '@crema/modules/siteDetail';
import { Table } from 'antd';
import MenuDropdown from './MenuDropdown';
import UrlHolder from '../../../UrlHolder';
import { formatCurrency } from '@crema/helpers';
import RemoveBacklinkOpportunityModal from '../../../RemoveBacklinkOpportunityModal';
import UpdateUserFeedbackBacklinkOpportunityModal from '../../../UpdateUserFeedbackBacklinkOpportunityModal';
import Title from 'antd/es/typography/Title';
import FilterButton from './FilterButton';
import BacklinkStatus from './BacklinkStatus';

const BacklinkOpportunities = ({ prop1 }) => {
  const { id } = useSiteDetail()
  const { data, isLoading } = useGetBacklinkOpportunitiesQuery({
    siteId: id
  })

  const [remove, setRemove] = useState(null)
  const [edit, setEdit] = useState(null)

  const columns = useMemo(() => {
    return [
      {
        title: 'Opportunity Type',
        dataIndex: 'opportunityType',
        key: 'opportunityType'
      },
      {
        title: 'Opportunity Domain/Link',
        dataIndex: 'opportunityUrl',
        key: 'opportunityUrl',
        render: (_, {opportunityUrl}) => {
          return <UrlHolder maxLine={1} url={opportunityUrl} />
        },
      },
      {
        title: 'Opportunity Notes ',
        dataIndex: 'opportunityNotes',
        key: 'opportunityNotes',
        render: (_, {opportunityNotes}) => {
          // check if opportunityNotes is a array
          if (Array.isArray(opportunityNotes)) {
            return opportunityNotes[0]
          }
          return opportunityNotes
        },
      },
      {
        title: 'User Feedback',
        key: 'userFeedback',
        dataIndex: 'userFeedback',
      },
      {
        title: 'Cost',
        key: 'cost',
        dataIndex: 'cost',
        render: (_, {cost}) => {
          return cost ? formatCurrency(cost, {
            language: 'en-US',
            currency: 'USD',
          }, 0) : 'N/A'
        },
      },
      {
        title: 'Status',
        key: 'status',
        render: (_, backlink) => {
          return <BacklinkStatus status={backlink.status} />
        }
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, blacklink) => (
          <MenuDropdown
            canRemove={blacklink.status === 'pending'}
            onEdit={() => {
              setEdit(blacklink)
            }}
            onRemove={() => {
              setRemove(blacklink)
            }}
          />
        ),
      }
    ]
  }, [setRemove, setEdit])

  const [filters, setFilters] = useState({
    opportunities: [],
    statuses: []
  })

  const filteredData = useMemo(() => {
    let fData =  data?.data

    if (filters.opportunities.length > 0) {
      fData = fData.filter((d) => {
        return filters.opportunities.includes(d.opportunityType)
      })
    }

    if (filters.statuses.length > 0) {
      fData = fData.filter((d) => {
        return filters.statuses.includes(d.status)
      })
    }

    return fData
  }, [data, filters])

  return <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Title level={5}>Outstanding Backlink Opportunities</Title>
      <FilterButton
        onClearAll={() => {
          setFilters({
            opportunities: [],
            statuses: []
          })
        }}
        filters={filters}
        onChangeToggleFilter={(key, value) => {
          const currentValues = filters[key]
          if (currentValues.includes(value)) {
            setFilters({
              ...filters,
              [key]: currentValues.filter((v) => v !== value)
            })
          } else {
            setFilters({
              ...filters,
              [key]: [...currentValues, value]
            })
          }
        }}
      />
    </div>
    <Table loading={isLoading} scroll={{
      x: 'min-content'
    }} columns={columns} dataSource={filteredData || []} />
    {
      remove && <RemoveBacklinkOpportunityModal
        onClose={() => setRemove(null)}
        open={!!remove}
        backlink={remove}
      />
    }
    {
      edit && <UpdateUserFeedbackBacklinkOpportunityModal
        onClose={() => setEdit(null)}
        open={!!edit}
        backlink={edit}
      />
    }
  </>
}


export default BacklinkOpportunities