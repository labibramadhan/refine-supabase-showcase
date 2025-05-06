import { Button, Card, Col, Form, FormProps, Input, Row } from 'antd';
import { useTranslation } from '@refinedev/core';
import { SearchOutlined, UndoOutlined } from '@ant-design/icons';

export type MemberListFilterProps = {
  formProps: FormProps;
  isResetButtonDisabled: boolean;
  isSearchButtonDisabled: boolean;
};

export default function MemberListFilterComponent({
  formProps,
  isResetButtonDisabled,
  isSearchButtonDisabled,
}: MemberListFilterProps) {
  const { translate: t } = useTranslation();

  return (
    <Card className="mb-4">
      <Form layout="vertical" {...formProps} className="mb-0">
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="first_name" label={t('member.filter.firstName', 'First Name')}>
              <Input
                placeholder={t('member.filter.firstNamePlaceholder', 'Search by first name')}
                prefix={<SearchOutlined />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="last_name" label={t('member.filter.lastName', 'Last Name')}>
              <Input
                placeholder={t('member.filter.lastNamePlaceholder', 'Search by last name')}
                prefix={<SearchOutlined />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="email" label={t('member.filter.email', 'Email')}>
              <Input
                placeholder={t('member.filter.emailPlaceholder', 'Search by email')}
                prefix={<SearchOutlined />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="phone_number" label={t('member.filter.phoneNumber', 'Phone Number')}>
              <Input
                placeholder={t('member.filter.phonePlaceholder', 'Search by phone')}
                prefix={<SearchOutlined />}
              />
            </Form.Item>
          </Col>
        </Row>

        <Col xs={24} className="flex justify-end">
          <Row gutter={8}>
            <Col>
              <Button
                type="primary"
                htmlType="submit"
                className="mr-2"
                icon={<SearchOutlined />}
                disabled={isSearchButtonDisabled}
              >
                {t('common.search', 'Search')}
              </Button>
            </Col>
            <Col>
              <Button
                disabled={isResetButtonDisabled}
                onClick={() => {
                  formProps.form?.resetFields();
                  formProps.form?.submit();
                }}
                icon={<UndoOutlined />}
              >
                {t('common.reset', 'Reset')}
              </Button>
            </Col>
          </Row>
        </Col>
      </Form>
    </Card>
  );
}
