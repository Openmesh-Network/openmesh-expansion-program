import { Address, DeployInfo, Deployer } from "../../web3webdeploy/types";

export interface DeployOEPReserveSettings
  extends Omit<DeployInfo, "contract" | "args"> {}

export async function deployOEPReserve(
  deployer: Deployer,
  settings: DeployOEPReserveSettings
): Promise<Address> {
  return await deployer
    .deploy({
      id: "OEPReserve",
      contract: "OEPReserve",
      ...settings,
    })
    .then((deployment) => deployment.address);
}
