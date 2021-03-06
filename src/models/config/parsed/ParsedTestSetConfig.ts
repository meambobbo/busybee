import {TestSetConfig} from "../user/TestSetConfig";
import {RESTTest} from "../../RESTTest";

export class ParsedTestSetConfig {
  id: string;
  controlFlow: string;
  controlFlowLimit: number;
  description: string;
  runData: any;
  tests: RESTTest[];
  testsUnordered: RESTTest[];
  variableExports: any; // holds vars exported from tests so that they can be used in other tests
  assertion: (retrunData:string) => boolean|void;

  constructor(testSetConfig: TestSetConfig) {
    this.id = testSetConfig.id;
    this.controlFlow = testSetConfig.controlFlow;
    this.controlFlowLimit = testSetConfig.controlFlowLimit;
    this.description = testSetConfig.description;
    this.runData = testSetConfig.runData;
    this.tests = <RESTTest []> [];
    this.testsUnordered = <RESTTest []> [];
    this.variableExports = {};
    this.assertion = testSetConfig.assertion;
  }
}
