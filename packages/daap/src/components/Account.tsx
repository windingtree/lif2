import { useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import Blockies from 'react-blockies';

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Utils
import { centerEllipsis } from '../utils/strings'; // copyToClipboard

// Custom hooks
import { useOutsideListener } from '../hooks/useOutsideListener';

export interface AccountProps {
  logOut?: Function;
  address?: string;
  networkId?: number;
  targetNetworkId?: number;
}

export interface AccountWrapperProps {
  isRightNetwork: boolean;
}

export interface AccountMenuItem {
  label: string;
  callback: Function;
}

const AccountWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  ${({ isRightNetwork }: AccountWrapperProps) => (
    isRightNetwork
      ? `
        background: linear-gradient(117.13deg, #D0F6EB 16.38%, rgba(208, 246, 235, 0) 88.99%);
      `
      : `
        background: linear-gradient(117.13deg, #F6E2D0 16.38%, rgba(246, 222, 208, 0) 88.99%);
        font-weight: bold;
      `
  )}
  border-radius: 16px;
  padding: 8px 12px;
  cursor: pointer;
`;

const ItemsList = styled.ul`
  li {
    font-size: 24px;
    font-weight: 500;
    color: rgb(${colors.black});
    margin-bottom: 40px;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

const Address = styled.div`
  color: rgb(${colors.dark});
  font-size: 24px;

  @media (max-width: ${responsive.sm}) {
    font-size: 16px;
  }
`;

const Icon = styled(Blockies)`
  border-radius: 50%;
  margin-left: 8px;
`;

const DropDown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  background-color: rgb(${colors.white});
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.1);
  cursor: auto;
  top: 60px;
`;

export const Account = ({
  address, networkId, targetNetworkId, logOut = () => {}
}: AccountProps) => {
  const [showMenu, setShowMenu] = useState(false);

  // Handle clicks outside the drop-down
  const dropDownRef = useRef(null);
  useOutsideListener(dropDownRef, () => setShowMenu(false));

  // Dropdown menu items
  const menuItems: AccountMenuItem[] = useMemo(() => [
    // {
    //   label: 'Copy to clipboard',
    //   callback: () => copyToClipboard(address || '')
    // },
    {
      label: 'Change wallet',
      callback: () => logOut()
    }
  ], [logOut]);

  // Detect the right connection
  const isRightNetwork = useMemo(() =>
    (networkId && targetNetworkId && networkId === targetNetworkId) ||
    !networkId ||
    !targetNetworkId,
  [networkId, targetNetworkId]);

  if (!address) {
    return null;
  }

  return (
    <AccountWrapper
      isRightNetwork={isRightNetwork}
    >
      <Address
        onClick={() => setShowMenu(true)}
      >
        {
          isRightNetwork
            ? centerEllipsis(address)
            : 'Wrong network'
        }
      </Address>
      <Icon
        seed={address}
        size={7}
        scale={4}
      />
      {showMenu &&
        <DropDown ref={dropDownRef}>
          <ItemsList>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  menuItems[index].callback();
                  setShowMenu(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ItemsList>
        </DropDown>
      }
    </AccountWrapper>
  );
};
