import React from "react";
import { Spinner } from "react-bootstrap";
import "./LoadingLayer.scss";

export default function LoadingLayer() {
  return (
    <div className="loading-layer">
      <Spinner animation="border" />
    </div>
  );
}
