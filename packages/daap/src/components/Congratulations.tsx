import type { Web3ModalProvider } from '../hooks/useWeb3Modal';
import { useState, useCallback } from 'react';
import styled from 'styled-components';
import Logger from '../utils/logger';
import { getContractsAddresses } from '../config';

// Styles
import { colors } from '../styles';

// Icons
import Lif2Png from '../assets/lif2.png';

// Custom components
import { Button } from './Buttons';
import { FireWorks } from '../components/FireWorks';
import { TxError } from '../components/TxError';

// Custom hooks
import { useRegisterToken } from '../hooks/useRegisterToken';

// Initialize logger
const logger = Logger('Congratulations');

// Config
const { lif2 } = getContractsAddresses();

export interface CongratulationsProps {
  provider: Web3ModalProvider | undefined
}

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 40px 24px 0 24px;
`;

const Title = styled.div`
  display: flex;
  font-size: 26px;
  font-weight: 500;
  line-height: 35px;
  color: rgb(${colors.purple});
`;

const RegButtonWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Congratulations = ({ provider }: CongratulationsProps) => {
  const [error, setError] = useState<string | null>(null);
  const [registerTokenProgress, setRegisterTokenProgress] = useState(false);

  const registrationCallback = useRegisterToken(
    provider,
    lif2,
    'LIF',
    18,
    Lif2Png
  );

  // Token registration flow
  const registerToken = useCallback(async () => {
    try {
      setRegisterTokenProgress(true);
      await registrationCallback();
      setRegisterTokenProgress(false);
    } catch (error) {
      setError((error as Error).message);
      logger.error(error);
      setRegisterTokenProgress(false);
    }
  }, [registrationCallback]);

  return (
    <BlockWrapper>
      <FireWorks duration={15000} />
      <Title>
        Congratulations!<br/>
        All your LIF is now in new tokens
      </Title>
      <RegButtonWrapper>
        <Button
          color='purple'
          onClick={registerToken}
          progress={registerTokenProgress}
          size='small'
        >
          Add new LIF to your wallet
        </Button>
        {error &&
          <TxError message={error}/>
        }
      </RegButtonWrapper>
    </BlockWrapper>
  );
}
