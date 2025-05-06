'use client';

import React from 'react';
import { Button, Result, Typography } from 'antd';
import { useTranslate } from '@refinedev/core';
import { FrownOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Paragraph, Text } = Typography;

export type ErrorPageProps = {
  title?: string;
  subTitle?: string;
  statusCode?: number;
  errorMessage?: string;
  backButtonLabel?: string;
  showBackButton?: boolean;
};

export const ErrorPage: React.FC<ErrorPageProps> = ({
  title,
  subTitle,
  statusCode = 403,
  errorMessage,
  backButtonLabel,
  showBackButton = true,
}) => {
  const translate = useTranslate();
  const router = useRouter();

  // Default title based on status code
  const defaultTitle = () => {
    switch (statusCode) {
      case 403:
        return translate('pages.error.forbidden.title', 'Forbidden');
      case 404:
        return translate('pages.error.notFound.title', 'Page Not Found');
      case 500:
        return translate('pages.error.serverError.title', 'Server Error');
      default:
        return translate('pages.error.default.title', 'An Error Occurred');
    }
  };

  // Default subtitle based on status code
  const defaultSubTitle = () => {
    switch (statusCode) {
      case 403:
        return translate(
          'pages.error.forbidden.subTitle',
          'Sorry, you are not authorized to access this page.',
        );
      case 404:
        return translate(
          'pages.error.notFound.subTitle',
          'Sorry, the page you visited does not exist.',
        );
      case 500:
        return translate(
          'pages.error.serverError.subTitle',
          'Sorry, something went wrong on our server.',
        );
      default:
        return translate(
          'pages.error.default.subTitle',
          'Sorry, an unexpected error has occurred.',
        );
    }
  };

  // Default back button label
  const defaultBackButtonLabel = translate('pages.error.backHome', 'Back to Previous Page');

  return (
    <div className="flex items-center justify-center min-h-[70vh] w-full p-4">
      <div className="w-full max-w-lg">
        <Result
          status={statusCode === 403 ? '403' : statusCode === 404 ? '404' : '500'}
          icon={<FrownOutlined className="text-red-500" />}
          title={
            <div className="text-2xl font-semibold text-gray-800">{title || defaultTitle()}</div>
          }
          subTitle={
            <div className="text-base text-gray-600 mt-2">{subTitle || defaultSubTitle()}</div>
          }
          extra={
            <div className="flex flex-col space-y-4">
              {errorMessage && (
                <div className="bg-orange-50 border border-orange-200 rounded-md p-4">
                  <Paragraph className="text-orange-800 mb-0">
                    <Text strong className="block mb-1">
                      {translate('pages.error.errorDetails', 'Error Details:')}
                    </Text>
                    {errorMessage}
                  </Paragraph>
                </div>
              )}
              {showBackButton && (
                <Button
                  type="primary"
                  icon={<ArrowLeftOutlined />}
                  onClick={() => router.back()}
                  className="bg-blue-500 hover:bg-blue-600 border-none shadow-md"
                >
                  {backButtonLabel || defaultBackButtonLabel}
                </Button>
              )}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ErrorPage;
