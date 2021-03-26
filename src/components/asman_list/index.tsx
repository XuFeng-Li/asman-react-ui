import React from "react";
import styles from './index.module.scss';

export interface ARListProps<T> {
  lists:T[],
  renderItem: (item:T) => React.ReactNode,
}

export default class ARList<T> extends React.Component<ARListProps<T>,{}> {
  render() {
    const {lists,renderItem} = this.props;
    return (
      <div className={styles.index}>
        <ul>
          {lists.map(renderItem)}
        </ul>
      </div>
    );
  }
}