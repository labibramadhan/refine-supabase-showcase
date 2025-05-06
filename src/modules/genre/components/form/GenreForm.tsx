import { Form, Input } from 'antd';
import { useTranslation } from '@refinedev/core';
import type { FormProps } from 'antd';

export type GenreFormProps = {
  formProps?: FormProps;
};

export default function GenreForm({ formProps }: GenreFormProps) {
  const { translate: t } = useTranslation();

  return (
    <Form {...formProps} layout="vertical" className="space-y-4">
      <Form.Item
        label={t('genre.form.name', 'Name')}
        name="name"
        rules={[
          {
            required: true,
            message: t('genre.form.nameRequired', 'Please input the genre name!'),
          },
        ]}
      >
        <Input placeholder={t('genre.form.namePlaceholder', 'Enter genre name')} />
      </Form.Item>
    </Form>
  );
}
