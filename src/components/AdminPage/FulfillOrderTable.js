import React from "react";
import PropTypes from "prop-types";
import styles from "./FulfillTable.css";
export class FulfillOrderTable extends React.Component {
  static propTypes = {
    orders: PropTypes.array,
    addOrder: PropTypes.func,
    updateOrders: PropTypes.func,
    updateSales: PropTypes.func,
  };

  handleClick = (order, orders) => {
    this.props.updateOrders(order.orderID, orders);
    this.props.updateSales(order);
  };

  createOrderDisplayTable = (orders) => {
    return orders.length ? (
      <table className={styles}>
        <thead>
          <tr>
            <th>Orders ID</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{this.makeOrderMarkup(orders)}</tbody>
      </table>
    ) : (
      <table>
        <thead>
          <tr>
            <th>No Orders to complete</th>
          </tr>
        </thead>
      </table>
    );
  };

  makeOrderMarkup = (orders) => {
    return orders.map((order, index) => (
      <tr key={index}>
        <td name="orderID">{order.orderId}</td>
        <td name="value">{order.value}</td>
        <td>
          <button
            id="fulfillOrder"
            name="fulfillOrder"
            onClick={(e) => {
              e.preventDefault();
              this.handleClick(order, orders);
            }}
          >
            Fulfill Order
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return this.createOrderDisplayTable(this.props.orders);
  }
}
