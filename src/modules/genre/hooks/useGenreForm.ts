import { useForm } from '@refinedev/antd';
import { Genre } from '@models/genre';

export const useGenreForm = ({
  id,
}: {
  id?: string;
} = {}) => {
  const form = useForm<Genre>({
    resource: 'genres',
    action: id ? 'edit' : 'create',
    id,
  });

  return { ...form };
};
