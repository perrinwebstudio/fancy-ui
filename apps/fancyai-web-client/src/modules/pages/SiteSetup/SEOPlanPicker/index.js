import React from 'react';
import { SEOPlanItem } from '@crema/modules/billing'
import { Space, Typography, theme } from 'antd';

const SEOPlanPicker = ({ prop1 }) => {
  const {token} = theme.useToken()

  return <div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  }}>
    <SEOPlanItem
      plan='SEO Lite'
      planCode={'LITE'}
      pricingComponent={<>
        Site Information
      </>}
      features={[
        'All features from previous plan',
        'Memberships and bundles',
        'Advanced quizzes',
        'Private & hidden course',
        '2 Site admin accounts',
        '5 Site admins/authors',
      ]}
      buttonLabel='Start Trial'
      color='#F94F4F'
    />
    <SEOPlanItem
      plan='SEO Pro'
      planCode={'PRO'}
      pricingComponent={<>
        <><Typography.Title style={{marginBottom: '0px'}} level={4}>$349</Typography.Title>/month</>
      </>}
      features={[
        'All features from previous plan',
        'Memberships and bundles',
        'Advanced quizzes',
        'Private & hidden course',
        '2 Site admin accounts',
        '5 Site admins/authors',
      ]}
      buttonLabel='Start SEO Pro'
      color={token.colorPrimary}
    />
    <SEOPlanItem
      plan='SEO Business'
      planCode={'BUSINESS'}
      pricingComponent={<>
         <><Typography.Title style={{marginBottom: '0px'}} level={4}>$349</Typography.Title>/month</>
      </>}
      features={[
        'All features from previous plan',
        'Memberships and bundles',
        'Advanced quizzes',
        'Private & hidden course',
        '2 Site admin accounts',
        '5 Site admins/authors',
      ]}
      buttonLabel='Start SEO Pro'
      color={'#9364D4'}
    />
    <SEOPlanItem
      plan='SEO Enterprise'
      planCode={'ENTERPR'}
      pricingComponent={<>
         <><Typography.Title style={{marginBottom: '0px'}} level={4}>$349</Typography.Title>/month</>
      </>}
      features={[
        'All features from previous plan',
        'Memberships and bundles',
        'Advanced quizzes',
        'Private & hidden course',
        '2 Site admin accounts',
        '5 Site admins/authors',
      ]}
      buttonLabel='Start Trial'
      color={'#5DD8D3'}
    />
  </div>
}

export default SEOPlanPicker