import { XmlRpcValue } from "@lichtblick/xmlrpc";

import { RosXmlRpcClient } from "./RosXmlRpcClient";
import { RosXmlRpcResponse, RosXmlRpcResponseOrFault } from "./XmlRpcTypes";

export class RosParamClient extends RosXmlRpcClient {
  async deleteParam(callerId: string, key: string): Promise<RosXmlRpcResponse> {
    return await this._methodCall("deleteParam", [callerId, key]);
  }

  async setParam(callerId: string, key: string, value: XmlRpcValue): Promise<RosXmlRpcResponse> {
    return await this._methodCall("setParam", [callerId, key, value]);
  }

  async getParam(callerId: string, key: string): Promise<RosXmlRpcResponse> {
    return await this._methodCall("getParam", [callerId, key]);
  }

  async searchParam(callerId: string, key: string): Promise<RosXmlRpcResponse> {
    return await this._methodCall("searchParam", [callerId, key]);
  }

  async subscribeParam(
    callerId: string,
    callerApi: string,
    key: string,
  ): Promise<RosXmlRpcResponse> {
    return await this._methodCall("subscribeParam", [callerId, callerApi, key]);
  }

  async subscribeParams(
    callerId: string,
    callerApi: string,
    keys: string[],
  ): Promise<RosXmlRpcResponseOrFault[]> {
    const requests = keys.map((key) => ({
      methodName: "subscribeParam",
      params: [callerId, callerApi, key],
    }));
    return await this._multiMethodCall(requests);
  }

  async unsubscribeParam(
    callerId: string,
    callerApi: string,
    key: string,
  ): Promise<RosXmlRpcResponse> {
    return await this._methodCall("unsubscribeParam", [callerId, callerApi, key]);
  }

  async unsubscribeParams(
    callerId: string,
    callerApi: string,
    keys: string[],
  ): Promise<RosXmlRpcResponseOrFault[]> {
    const requests = keys.map((key) => ({
      methodName: "unsubscribeParam",
      params: [callerId, callerApi, key],
    }));
    return await this._multiMethodCall(requests);
  }

  async hasParam(callerId: string, key: string): Promise<RosXmlRpcResponse> {
    return await this._methodCall("hasParam", [callerId, key]);
  }

  async getParamNames(callerId: string): Promise<RosXmlRpcResponse> {
    return await this._methodCall("getParamNames", [callerId]);
  }
}
