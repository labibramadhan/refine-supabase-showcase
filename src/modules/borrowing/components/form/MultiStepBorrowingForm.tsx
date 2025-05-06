import React from 'react';
import { useTranslation } from '@refinedev/core';
import { Card, Steps, Button } from 'antd';
import {
  BookOutlined,
  FormOutlined,
  CheckCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { useBorrowingFormStore } from '@modules/borrowing/stores/useBorrowingFormStore';
import { BookSelectionStep } from './steps/BookSelectionStep';
import { BorrowingDetailsStep } from './steps/BorrowingDetailsStep';
import { ConfirmationStep } from './steps/ConfirmationStep';

interface MultiStepBorrowingFormProps {
  isLoading: boolean;
  onFinish: (values: any) => void;
}

export const MultiStepBorrowingForm: React.FC<MultiStepBorrowingFormProps> = ({
  isLoading,
  onFinish,
}) => {
  const { translate: t } = useTranslation();
  const { currentStep, nextStep, prevStep, getFormData } = useBorrowingFormStore();

  const steps = [
    {
      title: t('borrowing.steps.selectBook', 'Select Book'),
      icon: <BookOutlined />,
      content: <BookSelectionStep />,
    },
    {
      title: t('borrowing.steps.enterDetails', 'Enter Details'),
      icon: <FormOutlined />,
      content: <BorrowingDetailsStep />,
    },
    {
      title: t('borrowing.steps.confirm', 'Confirm'),
      icon: <CheckCircleOutlined />,
      content: (
        <ConfirmationStep
          isLoading={isLoading}
          onSubmit={() => {
            const formData = getFormData();
            onFinish(formData);
          }}
        />
      ),
    },
  ];

  const handleNext = () => {
    nextStep();
  };

  const handlePrev = () => {
    prevStep();
  };

  return (
    <Card className="mb-6">
      <Steps
        current={currentStep}
        items={steps.map((item) => ({
          title: item.title,
          icon: item.icon,
        }))}
        className="mb-8"
      />

      <div className="steps-content p-2 md:p-4 min-h-[400px]">{steps[currentStep].content}</div>

      <div className="steps-action mt-8 flex justify-between">
        {currentStep > 0 && (
          <Button icon={<ArrowLeftOutlined />} onClick={handlePrev}>
            {t('buttons.previous', 'Previous')}
          </Button>
        )}

        {currentStep < steps.length - 1 && (
          <Button type="primary" onClick={handleNext} className="ml-auto">
            {t('buttons.next', 'Next')} <ArrowRightOutlined />
          </Button>
        )}
      </div>
    </Card>
  );
};
