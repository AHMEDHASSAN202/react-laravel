import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CategoryIcon from '@material-ui/icons/Category';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TransformIcon from '@material-ui/icons/Transform';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import GroupIcon from '@material-ui/icons/Group';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import PagesIcon from '@material-ui/icons/Pages';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DvrIcon from '@material-ui/icons/Dvr';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RedeemIcon from '@material-ui/icons/Redeem';
import { translate } from './helpers/functions';

export default [
    [
          {
            title: translate('dashboard::dashboard'),
            href: '/dashboard',
            icon: <DashboardIcon />
          },
          {
              title: 'ٍStores',
              href: '#',
              icon: <StoreIcon />,
              key: 'stores',
              children: [
                {
                  title: 'All Stores',
                  href: '/dashboard/stores',
                  icon: <StoreIcon />,
                },
                {
                  title: 'Store Approvals',
                  href: '/dashboard/stores/approvals',
                  icon: <PlaylistAddCheckIcon />,
                }
              ]
          },
          {
              title: 'Catalog',
              href: '#',
              icon: <ListAltIcon />,
              key: 'catalog',
              children: [
                {
                  title: 'Products',
                  href: '/dashboard/products',
                  icon: <ShoppingCartIcon />,
                },
                {
                  title: 'Categories',
                  href: '/dashboard/categories',
                  icon: <CategoryIcon />,
                },
                {
                  title: 'Brands',
                  href: '/dashboard/brands',
                  icon: <AssistantPhotoIcon />,
                },
                {
                  title: 'Attributes',
                  href: '/dashboard/attributes',
                  icon: <EditAttributesIcon />,
                },
                {
                  title: 'Attribute Group',
                  href: '/dashboard/attributes/group',
                  icon: <GroupWorkIcon />,
                },
                {
                  title: 'Options',
                  href: '/dashboard/options',
                  icon: <DragIndicatorIcon />,
                },
                {
                  title: 'Tags',
                  href: '/dashboard/tags',
                  icon: <ChangeHistoryIcon />,
                },
                {
                  title: 'Reviews',
                  href: '/dashboard/reviews',
                  icon: <RateReviewIcon />,
                }
              ]
          },
          {
              title: 'Sales',
              href: '#',
              icon: <AddShoppingCartIcon />,
              key: 'sales',
              children: [
                {
                  title: 'Orders',
                  href: '/dashboard/orders',
                  icon: <AddShoppingCartIcon />,
                },
                {
                  title: 'Transactions',
                  href: '/dashboard/transactions',
                  icon: <TransformIcon />,
                },
                {
                  title: 'Returns',
                  href: '/dashboard/returns',
                  icon: <KeyboardReturnIcon />,
                },
              ]
          },
          {
              title: 'Customers',
              href: '#',
              icon: <GroupIcon />,
              key: 'customers',
              children: [
                {
                  title: 'Customers',
                  href: '/dashboard/customers',
                  icon: <GroupIcon />,
                },
                {
                  title: 'Customer Approvals',
                  href: '/dashboard/customers/approvals',
                  icon: <HowToRegIcon />,
                }
              ]
        },
        {
          title: 'Marketing',
          href: '#',
          icon: <DvrIcon />,
          key: 'marketing',
          children: [
            {
              title: 'Coupons',
              href: '/dashboard/marketing/coupons',
              icon: <RedeemIcon />
            },
            {
              title: 'Mail',
              href: '/dashboard/marketing/mail',
              icon: <MailIcon />,
            },
            {
              title: 'Whatsapp',
              href: '/dashboard/marketing/whatsapp',
              icon: <WhatsAppIcon />,
            }
          ]
        },
        {
            title: translate('dashboard::pages'),
            href: '/dashboard/pages',
            icon: <PagesIcon />
        },
        {
            title: translate('dashboard::media'),
            href: '/dashboard/media',
            icon: <PermMediaIcon />
        },
    ],
    [
        {
            title: translate('dashboard::localization'),
            href: '#',
            icon: <LanguageIcon />,
            key: 'localization',
            children: [
              {
                title: translate('dashboard::languages'),
                href: '/dashboard/languages',
                icon: <LanguageIcon />,
              },
              {
                title: translate('dashboard::translations'),
                href: '/dashboard/translations',
                icon: <GTranslateIcon />,
              },
              {
                title: 'Currency Rate',
                href: '/dashboard/currency-rate',
                icon: <AttachMoneyIcon />,
              },
              {
                title: 'Taxes',
                href: '/dashboard/taxes',
                icon: <MoneyOffIcon />,
              }
            ]
        },
        {
            title: translate('dashboard::users'),
            href: '#',
            icon: <PeopleOutlineIcon />,
            key: 'users',
            children: [
              {
                title: translate('dashboard::users'),
                href: '/dashboard/users',
                icon: <PeopleOutlineIcon />,
              },
              {
                title: translate('dashboard::roles'),
                href: '/dashboard/roles',
                icon: <PersonAddDisabledIcon />,
              }
            ]
        },
        {
            title: translate('dashboard::reports'),
            href: '/dashboard/reports',
            icon: <AssessmentIcon />
        },
        {
            title: translate('dashboard::settings'),
            href: '/dashboard/settings',
            icon: <SettingsIcon />
        },
    ]
  ];