import React from "react";

import ReactTable from "react-table";
import AccountsTableHeader from "../AccountsTableHeader/AccountsTableHeader.js"

import "react-table/react-table.css";

import "./AccountsTable.css";

let app;

function InspectAddress(address, state) {
  app.setState({
    inspected_address: address,
    inspected_address_state: state
  });
}

function AccountsTable(props) {
  app = props.app;

  const data = [];

  props.accounts.forEach(account => {
    var supplyAmount = (account.totalEthSupply / 1e18).toFixed(6);
    var borrowAmount = (account.totalEthBorrow / 1e18).toFixed(6);

    var ratio = +(supplyAmount / borrowAmount).toFixed(6);

    var minCollateralRatio = app.state.MIN_COLLATERAL_RATIO;
    var safeCollateralRatio = app.state.SAFE_COLLATERAL_RATIO;

    // calculate the account liquidity

    var accountLiquidity = (supplyAmount - (app.state.MIN_COLLATERAL_RATIO * borrowAmount)).toFixed(6);

    var state = "";

    if (ratio < minCollateralRatio) {
      state = "unsafe";
    } else if (ratio <= safeCollateralRatio) {
      state = "risky";
    } else {
      state = "safe";
    }

    var ratioDisplay = (ratio * 100).toFixed(6) + "%";

    var accountObj = {
      address: account.address,
      supply: Number(supplyAmount),
      borrow: Number(borrowAmount),
      accountLiquidity: Number(accountLiquidity),
      ratio: ratioDisplay,
      state: state,
      block: Number(account.blockUpdated)
    };
    data.push(accountObj);
  });

  var etherScanPrefix = app.state.ETHERSCAN_PREFIX;

  const columns = [
    {
      Header: "Address",
      accessor: "address",
      maxWidth: 500,
      Cell: row => (
        <a href={etherScanPrefix + "address/" + row.value} target="_blank" rel="noopener noreferrer">
          {row.value}
        </a>
      )
    },
    {
      Header: "Last Updated",
      accessor: "block",
      maxWidth: 200,
      className: "right",
      Cell: row => (
        <a href={etherScanPrefix + "block/" + row.value} target="_blank" rel="noopener noreferrer">
          {row.value}
        </a>
      )
    },
    {
      Header: "Supply",
      accessor: "supply",
      maxWidth: 150,
      className: "right"
    },
    {
      Header: "Borrow",
      accessor: "borrow",
      maxWidth: 150,
      className: "right"
    },
    {
      Header: "Ratio",
      accessor: "ratio",
      maxWidth: 150,
      className: "right"
    },
    {
      Header: "Account Liquidity",
      accessor: "accountLiquidity",
      maxWidth: 150,
      className: "right"
    },
    {
      Header: "State",
      accessor: "state",
      maxWidth: 200,
      Cell: row => (
        <span>
          <span
            style={{
              color:
                row.value === "safe"
                  ? "#57d500"
                  : row.value === "risky"
                  ? "#ffbf00"
                  : "#ff2e00",

              transition: "all .3s ease"
            }}
          >
            &#x25cf;
          </span>{" "}
          {row.value === "safe"
            ? "Safe"
            : row.value === "risky"
            ? "Risky"
            : "Unsafe"}
        </span>
      )
    },
    {
      Header: "",
      accessor: "liquidate",
      maxWidth: 200,
      Cell: row => (
        <button
          className="InspectButton"
          onClick={() => InspectAddress(row.row.address, row.original.state)}
        >
          Inspect
        </button>
      )
    }
  ];

  var showPageSizeOptions = false;
  var defaultPageSize = 15;

  // var minRows = defaultPageSize;

  return (
    <div className="AccountsTable">
      <AccountsTableHeader currentBlock={props.currentBlock} app={app}/>
      <br/>

      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={defaultPageSize}
        showPageSizeOptions={showPageSizeOptions}
        className="-striped"
      />
      <p>
        <a href="https://github.com/conlan/compound-liquidator" target="_blank" rel="noopener noreferrer">
          Github
        </a>{" "}
        |{" "}
        <a href="https://compound.finance" target="_blank" rel="noopener noreferrer">
          Compound
        </a>{" "}
        |{" "}
        <a href="https://compound.finance/developers#liquidate" target="_blank" rel="noopener noreferrer">
          Documentation
        </a>{" "}
        | Use at your own{" "}
        <b>
          <font color="red">risk!</font>
        </b>
      </p>
    </div>
  );
}

export default AccountsTable;
