import '@typechain/hardhat';
import 'dotenv/config';
import { HardhatUserConfig } from 'hardhat/types';

const HARDHAT_ENABLE_SENTRY = false;
const mnemonic = 'test test test test test test test test test test test junk';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.5.17',
    settings: {
//      metadata: {
//        bytecodeHash: 'none',
//      },
      optimizer: {
        enabled: false,
        runs: 200,
        details: {
          yul: false,
        },
      },
    },
 }
};
export default config;
