import * as React from 'react';
import classnames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
}

const baseClass = 'button';

const Button = ({ children, className = '', loading = false, ...restProps }: Props) => {
  const btnContentCls = classnames(`${baseClass}__content`, {
    [`${baseClass}__content--loading`]: loading,
  });

  return (
    <button className={classnames(baseClass, className)} type="button" {...restProps}>
      {loading ? <div className={`${baseClass}__loader`} /> : null}

      <div className={btnContentCls}>{children}</div>
    </button>
  );
};

export default Button;
