import { Breadcrumb } from 'antd';

const BookBreadcrumb = ({ onHome, title }) => (
  <div className="mb-8">
    <Breadcrumb
      items={[
        { title: <a onClick={onHome}>Home</a> },
        { title },
      ]}
    />
  </div>
);

export default BookBreadcrumb;
