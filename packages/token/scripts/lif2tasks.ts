import { task } from 'hardhat/config';

// Helper for getting and printing signers addresses
const getSigners = async (hre: any): Promise<string[]> => {
  const accounts = await hre.ethers.getSigners();
  console.log('Signers:');
  for (const account of accounts) {
    console.log(await account.getAddress());
  }
  return accounts;
};

// Prints a list of enabled signers addresses
task('accounts', 'Prints a list of signers addresses')
  .setAction(async (_, hre) => {
    await getSigners(hre);
  });

// Deployment task
task('deploy', 'Deploys the token')
  .setAction(async (_, hre) => {
    await getSigners(hre);
    const contractName = 'Lif2';
    const contract = await hre.ethers.getContractFactory(contractName);
    console.log(`Deploying the ${contractName} proxy...`);
    const proxy = await hre.upgrades.deployProxy(
      contract,
      [
        process.env.OLD_LIF_CONTRACT
      ],
      {
        initializer: 'initialize'
      }
    );
    await proxy.deployed();
    console.log(`${contractName} proxy deployed to:`, proxy.address);
  });

// Transfers proxy admin ownership
task('transfer', 'Transfer proxy admin ownership')
  .addParam('address', 'New proxy admin owner address')
  .setAction(async (args, hre) => {
    await getSigners(hre);
    const newOwner = args.address;
    await hre.upgrades.admin.transferProxyAdminOwnership(newOwner);
  });

// Upgrade task
task('upgrade', 'Upgrade the token')
  .addParam('name', 'Name of the new contract implementation')
  .addParam('proxy', 'Address of the proxy to upgrade')
  .setAction(async (args, hre) => {
    await getSigners(hre);
    const contractName = args.name;
    const contract = await hre.ethers.getContractFactory(contractName);
    const proxyAddress = args.proxy;
    console.log(`Upgrading the ${contractName} proxy...`);
    const proxy = await hre.upgrades.upgradeProxy(proxyAddress, contract);
    console.log(`${contractName} proxy upgraded at: ${proxy.address}`);
  });

// Deploys an instance of the contract that can be used for upgrade
task('prepare', 'Prepare an upgrade')
  .addParam('name', 'Name of the new contract implementation')
  .addParam('proxy', 'Address of the proxy to upgrade')
  .setAction(async (args, hre) => {
    await getSigners(hre);
    const contractName = args.name;
    const contract = await hre.ethers.getContractFactory(contractName);
    const proxyAddress = args.proxy;
    console.log(`Deploying the ${contractName} instance...`);
    const instanceAddress = await hre.upgrades.prepareUpgrade(proxyAddress, contract);
    console.log(`${contractName} instance deployed at: ${instanceAddress}`);
  });
