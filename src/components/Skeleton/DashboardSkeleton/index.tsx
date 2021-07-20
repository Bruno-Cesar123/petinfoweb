import React from 'react';
import Skeleton from 'react-loading-skeleton';

const DashboardSkeleton: React.FC = () => {
  return (
    <div className="list-pets">
      <a href="/">
        <Skeleton circle height={64} width={64} />
        <div>
          <strong>
            <Skeleton width={80} />
          </strong>
          <p>
            <Skeleton width={140} />
          </p>
        </div>
      </a>

      <a href="/">
        <Skeleton circle height={64} width={64} />
        <div>
          <strong>
            <Skeleton width={80} />
          </strong>
          <p>
            <Skeleton width={140} />
          </p>
        </div>
      </a>
    </div>
  );
};

export default DashboardSkeleton;
