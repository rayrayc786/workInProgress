import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Define a label mapping based on routes
const breadcrumbNameMap = {
  '/': 'Home',
  '/about-us': 'About Us',
  '/properties': 'Properties',
  '/agents': 'Agents',
  '/blog': 'Blog',
  '/contact-us': 'Contact Us',
};

const DynamicBreadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the current path and split it into an array for breadcrumbs
  const pathnames = location.pathname.split('/').filter((x) => x);

  const handleNavigation = (event, to) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ fontSize: '16px', padding: '32px 0' }}
    >
      {/* Home Breadcrumb */}
      <Link
        color="inherit"
        href="/"
        onClick={(e) => handleNavigation(e, '/')}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        Home
      </Link>

      {/* Dynamic Breadcrumbs based on current location */}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography
            color="textPrimary"
            key={to}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {breadcrumbNameMap[to] || value}
          </Typography>
        ) : (
          <Link
            color="inherit"
            href={to}
            onClick={(e) => handleNavigation(e, to)}
            key={to}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {breadcrumbNameMap[to] || value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumb;
