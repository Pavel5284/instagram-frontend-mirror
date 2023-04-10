export const sideBarContainerStyle = {
  minWidth: '220px',
  height: 'calc(100vh - 60px)',
  maxHeight: 'calc(100vh - 60px)',
  backgroundColor: 'dark.700',
  borderRight: '1px solid',
  borderColor: 'dark.300',
  padding: '72px 0 32px 60px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflowY: 'auto',
};

export const linkStyle = {
  listStyleType: 'none',
  '&:hover': {
    color: 'primary.100',
    fontWeight: 700,
  },
  '&:active': {
    color: 'primary.500',
  },
  '&disabled': {
    color: 'dark.100',
  },
};

export const linkContainerStyle = {
  '&>:nth-child(3)': {
    marginBottom: '60px',
  },
};
