import { useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import Blockies from 'react-blockies';

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Utils
import { centerEllipsis, copyToClipboard } from '../utils/strings';

// Custom hooks
import { useOutsideListener } from '../hooks/useOutsideListener';

export interface AccountProps {
  logOut?: Function;
  account?: string;
  isRightNetwork: boolean;
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
  overflow: hidden;
  padding: 20px;
  border-radius: 20px;
  background-color: rgb(${colors.white});
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.1);
  cursor: auto;
  top: 60px;
  width: 250px;
  z-index: 9999;
`;

const MenuItem = styled.div`
  display: block;
  position: relative;
  font-size: 24px;
  font-weight: 500;
  color: rgb(${colors.black});
  margin-bottom: 40px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0px;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
  &:active {
    color: rgb(${colors.dark});
    &:after {
      background-color: rgba(${colors.grey},0.8);
    }
  }
  &:after {
    opacity: 0;
    position: absolute;
    content: "";
    top: -20px;
    right: -20px;
    bottom: -20px;
    left: -20px;
    background-color: rgba(${colors.grey},0.3);
  }
`;

const MenuLabel = styled.div`
  z-index: 9999;
  position: relative;
  /* &:hover {

  } */
`;

export const Account = ({
  account,
  isRightNetwork,
  logOut = () => {}
}: AccountProps) => {
  const [showMenu, setShowMenu] = useState(false);

  // Handle clicks outside the drop-down
  const dropDownRef = useRef(null);
  useOutsideListener(dropDownRef, () => setShowMenu(false));

  // Dropdown menu items
  const menuItems: AccountMenuItem[] = useMemo(() => [
    {
      label: 'Copy to clipboard',
      callback: () => copyToClipboard(account || '')
    },
    {
      label: 'Change wallet',
      callback: () => logOut()
    }
  ], [account, logOut]);

  if (!account) {
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
            ? centerEllipsis(account)
            : 'Wrong network'
        }
      </Address>
      <div
        onClick={() => setShowMenu(true)}
      >
        <Icon
          seed={account}
          size={7}
          scale={4}
        />
      </div>
      {showMenu &&
        <DropDown ref={dropDownRef}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                menuItems[index].callback();
                setShowMenu(false);
              }}
            >
              <MenuLabel>
                {item.label}
              </MenuLabel>
            </MenuItem>
          ))}
        </DropDown>
      }
    </AccountWrapper>
  );
};
