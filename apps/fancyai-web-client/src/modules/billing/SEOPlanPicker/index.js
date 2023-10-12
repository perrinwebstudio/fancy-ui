import React, { useMemo } from 'react';
import { SEOPlanItem } from '@crema/modules/billing'
import { Skeleton, Typography } from 'antd';
import { useGetSiteSubscriptionPlansQuery } from 'apps/fancyai-web-client/src/core/api/apiBilling';

export const SEO_PLANS = [
  {
    plan: 'SEO Lite',
    planCode: 'Lite',
    pricingComponent: <>Site Information</>,
    features: [
      'All features from previous plan',
      'Memberships and bundles',
      'Advanced quizzes',
      'Private & hidden course',
      '2 Site admin accounts',
      '5 Site admins/authors',
    ],
    buttonLabel: 'Start Trial',
    color: '#F94F4F',
  },
  {
    plan:'SEO Pro',
    planCode:'Pro',
    pricingComponent:<>
      <><Typography.Title style={{marginBottom: '0px'}} level={4}>$349</Typography.Title>/month</>
    </>,
    features:[
      'All features from previous plan',
      'Memberships and bundles',
      'Advanced quizzes',
      'Private & hidden course',
      '2 Site admin accounts',
      '5 Site admins/authors',
    ],
    buttonLabel:'Start Trial',
    color: "#0078CC"
  },
  {
    plan:'SEO Business',
    planCode:'Business',
    pricingComponent:<>
        <><Typography.Title style={{marginBottom: '0px'}} level={4}>$349</Typography.Title>/month</>
    </>,
    features:[
      'All features from previous plan',
      'Memberships and bundles',
      'Advanced quizzes',
      'Private & hidden course',
      '2 Site admin accounts',
      '5 Site admins/authors',
    ],
    buttonLabel:'Start Trial',
    color:'#9364D4',
  },
  {
    plan:'SEO Enterprise',
    planCode:'Enterprise',
    pricingComponent:<>
        <><Typography.Title style={{marginBottom: '0px'}} level={4}>$349</Typography.Title>/month</>
    </>,
    features:[
      'All features from previous plan',
      'Memberships and bundles',
      'Advanced quizzes',
      'Private & hidden course',
      '2 Site admin accounts',
      '5 Site admins/authors',
    ],
    buttonLabel:'Start Trial',
    color:'#5DD8D3'
  }
]

const SEOPlanPicker = ({ onChange, value, viewMode, buttonLabel }) => {
  const { data, isLoading } = useGetSiteSubscriptionPlansQuery()

  const plans = useMemo(() => {
    return (data?.data || []).map(plan => {
      const _plan = SEO_PLANS.find(p => p.planCode === plan.plan)
      const rs = {
        ..._plan,
      }
      if (rs?.planCode !== 'Lite') {
        rs.pricingComponent = <><Typography.Title style={{marginBottom: '0px'}} level={4}>${plan.price}</Typography.Title>/month</>
      }
      return rs
    }).filter(p => !!p.planCode)
  }, [data])

  if (isLoading) {
    return <Skeleton active />
  }
  
  return <div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  }}>
    {
      plans.map((plan) => {
        return <SEOPlanItem
          viewMode={viewMode}
          key={plan.planCode}
          {...plan}
          buttonLabel={buttonLabel || plan.buttonLabel}
          active={value === plan.planCode}
          onClick={onChange}
        />
      })
    }
  </div>
}

export default SEOPlanPicker