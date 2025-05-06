import { Form, Input, DatePicker, Select, Row, Col, FormProps } from 'antd';
import { useTranslate } from '@refinedev/core';

export type MemberFormProps = {
  formProps?: FormProps;
};

export default function MemberForm({ formProps }: MemberFormProps) {
  const t = useTranslate();

  return (
    <Form layout="vertical" {...formProps} className="w-full mx-auto">
      <Row gutter={[24, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            name="first_name"
            label={t('member.form.firstName', 'First Name')}
            rules={[
              {
                required: true,
                message: t('member.form.validation.firstNameRequired', 'Please enter first name'),
              },
            ]}
          >
            <Input
              placeholder={t('member.form.firstNamePlaceholder', 'Enter first name')}
              className="rounded-md"
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            name="last_name"
            label={t('member.form.lastName', 'Last Name')}
            rules={[
              {
                required: true,
                message: t('member.form.validation.lastNameRequired', 'Please enter last name'),
              },
            ]}
          >
            <Input
              placeholder={t('member.form.lastNamePlaceholder', 'Enter last name')}
              className="rounded-md"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="email"
            label={t('member.form.email', 'Email')}
            rules={[
              {
                required: true,
                message: t('member.form.validation.emailRequired', 'Please enter email'),
              },
              {
                type: 'email',
                message: t('member.form.validation.emailInvalid', 'Please enter a valid email'),
              },
            ]}
          >
            <Input
              placeholder={t('member.form.emailPlaceholder', 'Enter email address')}
              className="rounded-md"
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            name="phone_number"
            label={t('member.form.phoneNumber', 'Phone Number')}
            rules={[
              {
                required: true,
                message: t('member.form.validation.phoneRequired', 'Please enter phone number'),
              },
            ]}
          >
            <Input
              placeholder={t('member.form.phonePlaceholder', 'Enter phone number')}
              className="rounded-md"
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="address" label={t('member.form.address', 'Address')}>
            <Input.TextArea
              rows={3}
              placeholder={t('member.form.addressPlaceholder', 'Enter full address')}
              className="rounded-md"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="membership_start_date"
            label={t('member.form.membershipStartDate', 'Membership Start Date')}
            rules={[
              {
                required: true,
                message: t('member.form.validation.startDateRequired', 'Please select start date'),
              },
            ]}
          >
            <DatePicker className="min-w-full rounded-md" format="YYYY-MM-DD" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            name="membership_end_date"
            label={t('member.form.membershipEndDate', 'Membership End Date')}
          >
            <DatePicker className="w-full rounded-md" format="YYYY-MM-DD" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="status"
            label={t('member.form.status', 'Status')}
            rules={[
              {
                required: true,
                message: t('member.form.validation.statusRequired', 'Please select status'),
              },
            ]}
          >
            <Select className="w-full rounded-md">
              <Select.Option value="active">
                {t('member.form.statusOptions.active', 'Active')}
              </Select.Option>
              <Select.Option value="inactive">
                {t('member.form.statusOptions.inactive', 'Inactive')}
              </Select.Option>
              <Select.Option value="pending">
                {t('member.form.statusOptions.pending', 'Pending')}
              </Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
