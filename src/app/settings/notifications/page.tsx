import { PlaceholderMessage } from '@vat/components/ui/placeholder-message/PlaceholderMessage';

// This page is just a placeholder. I don't plan on implementing this feature.
const Notifications = () => {
  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex border-b border-base-dark-line p-6'>
        <h2 className='text-heading-h2 text-white'>Notifications</h2>
      </div>
      <PlaceholderMessage
        title='Feature coming soon'
        body='We are working hard to bring you this feature as soon as possible.
          Thank you for using our services.'
        bodySize='lg'
      />
    </div>
  );
};

export default Notifications;
