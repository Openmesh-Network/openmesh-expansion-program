import { Address, Deployer } from "../web3webdeploy/types";
import {
  DeployOEPReserveSettings,
  deployOEPReserve,
} from "./internal/OEPReserve";

export interface OEPDeploymentSettings {
  oepReserveSettings: DeployOEPReserveSettings;
  forceRedeploy?: boolean;
}

export interface OEPDeployment {
  oepReserve: Address;
}

export async function deploy(
  deployer: Deployer,
  settings?: OEPDeploymentSettings
): Promise<OEPDeployment> {
  if (settings?.forceRedeploy !== undefined && !settings.forceRedeploy) {
    const existingDeployment = await deployer.loadDeployment({
      deploymentName: "latest.json",
    });
    if (existingDeployment !== undefined) {
      return existingDeployment;
    }
  }

  const oepReserve = await deployOEPReserve(
    deployer,
    settings?.oepReserveSettings ?? {}
  );

  const deployment: OEPDeployment = {
    oepReserve: oepReserve,
  };
  await deployer.saveDeployment({
    deploymentName: "latest.json",
    deployment: deployment,
  });
  return deployment;
}
