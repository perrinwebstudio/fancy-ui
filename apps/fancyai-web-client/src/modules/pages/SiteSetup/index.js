import React, { useEffect, useMemo } from "react";
import { Anchor, Button, Card, Col, Form, Row, Typography } from "antd";
import AppPageMeta from "@crema/components/AppPageMeta";
import AppInfoView from "@crema/components/AppInfoView";
import {SiteSetupSteps} from "@crema/modules/siteSetup";
import StyledSiteSetupStepBar from "./StyledSiteSetupStepBar";
import { Link } from "react-router-dom";
import SimpleBarReact from "simplebar-react";
import NewSiteForm from "./NewSiteForm";

const { Title } = Typography;

const SiteSetup = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const checkPosition = () => {
    const offset = 100;
    const sections = Array.from(document.querySelectorAll('.form-section'));
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= offset && rect.top + rect.height > offset) {
        setCurrentStep(i + 1);
        break;
      }
    }
  };

  useEffect(() => {
    const mainComponent = document.querySelector('.site-setup-form-wrapper')
    if (mainComponent) {
      mainComponent.addEventListener('scroll', checkPosition);
      return () => {
        console.log('removed event')
        mainComponent.removeEventListener('scroll', checkPosition);
      };
    }
  }, []);

  const form = useMemo(() => {
    return <NewSiteForm />
  }, [])

  return (
    <>
      <AppPageMeta title="Add new site" />
      <StyledSiteSetupStepBar>
        <Col md={16} lg={5}>
          <Title level={3}>Add new site</Title>
        </Col>
        <Col xs={0} sm={0} md={16} lg={14}>
          <SiteSetupSteps current={currentStep} onClickStep={(step) => {
            setCurrentStep(step)
            const element = document.getElementById(`step${step + 1}`)
            if (element) {
              element.scrollIntoView({behavior: 'smooth', block: step === 0 ? 'center' : 'start'})
            }
          }} />
        </Col>
        <Col md={16} lg={5}>
          <div style={{textAlign: 'right'}}>
            <Link to="/pages/sites"><Button ghost type='primary'>Back to sites</Button></Link>
          </div>
        </Col>
      </StyledSiteSetupStepBar>
      <SimpleBarReact style={{ flex: 1, overflowY: 'auto', minHeight: '0px', marginTop: '10px', marginBottom: '10px' }}>
        <Card className="site-setup-form-wrapper" bordered={false} style={{overflow: 'scroll'}}>
          {form}
        </Card>
      </SimpleBarReact>
      <AppInfoView />
    </>
  );
};

export default SiteSetup;
