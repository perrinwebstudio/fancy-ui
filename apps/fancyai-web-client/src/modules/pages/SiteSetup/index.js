import React, { useEffect } from "react";
import { Anchor, Button, Card, Col, Form, Row, Typography } from "antd";
import AppPageMeta from "@crema/components/AppPageMeta";
import AppInfoView from "@crema/components/AppInfoView";
import {SiteSetupSteps} from "@crema/modules/siteSetup";
import SiteSetupStep1 from "./Step1";
import SiteSetupStep2 from "./Step2";
import StyledSiteSetupStepBar from "./StyledSiteSetupStepBar";
import SiteSetupStep3 from "./Step3";
import SiteSetupStep4 from "./Step4";
import SiteSetupStep5 from "./Step5";
import SiteSetupStep6 from "./Step6";
import SiteSetupStep7 from "./Step7";
import StepFormWrapper from "./StepFormWrapper";
import { Link } from "react-router-dom";
import SimpleBarReact from "simplebar-react";

const { Title } = Typography;

const SiteSetup = () => {
  const [form] = Form.useForm();

  const sitePlatform = Form.useWatch('site_platform', form)

  const [currentStep, setCurrentStep] = React.useState(0);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           switch (entry.target.id) {
  //             case 'step1':
  //               setCurrentStep(0);
  //               break;
  //             case 'step2':
  //               console.log('step 22')
  //               setCurrentStep(1);
  //               break;
  //             case 'step3':
  //               setCurrentStep(2);
  //               break;
  //             case 'step4':
  //               setCurrentStep(3);
  //               break;
  //             case 'step5':
  //               setCurrentStep(4);
  //               break;
  //             case 'step6':
  //               setCurrentStep(5);
  //               break;
  //             case 'step7':
  //               setCurrentStep(6);
  //               break;
  //             default:
  //               break;
  //           }
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5,  // Adjust the threshold value to your needs
  //     }
  //   );

  //   observer.observe(document.getElementById('step1'));
  //   observer.observe(document.getElementById('step2'));
  //   observer.observe(document.getElementById('step3'));
  //   observer.observe(document.getElementById('step4'));
  //   observer.observe(document.getElementById('step5'));
  //   observer.observe(document.getElementById('step6'));
  //   observer.observe(document.getElementById('step7'));

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

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
          <Form initialValues={{
            site_platform: 'shopify'
          }} form={form} layout="vertical">
            <SiteSetupStep1 />
            <SiteSetupStep2 />
            <SiteSetupStep3 />
            <SiteSetupStep4 />
            <SiteSetupStep5 />
            <SiteSetupStep6 sitePlatform={sitePlatform} />
            <SiteSetupStep7 />
            <StepFormWrapper >
              <Button style={{marginTop: '20px'}} type="primary" block size="large">Confirm</Button>
            </StepFormWrapper>
          </Form>
        </Card>
      </SimpleBarReact>
      <AppInfoView />
    </>
  );
};

export default SiteSetup;
