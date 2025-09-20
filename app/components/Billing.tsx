'use client'

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar,
  useTheme,
} from '@mui/material'
import {
  CreditCard,
  AccountBalance,
  Payment,
  Receipt,
  Add,
  Download,
  Visibility,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

// Sample data
const transactions = [
  {
    id: 1,
    description: 'Premium Plan Subscription',
    amount: 99.99,
    date: '2024-01-15',
    status: 'Completed',
    type: 'Subscription',
  },
  {
    id: 2,
    description: 'Add-on Storage (500GB)',
    amount: 29.99,
    date: '2024-01-10',
    status: 'Completed',
    type: 'Add-on',
  },
  {
    id: 3,
    description: 'API Usage Charges',
    amount: 15.50,
    date: '2024-01-08',
    status: 'Pending',
    type: 'Usage',
  },
  {
    id: 4,
    description: 'Premium Support',
    amount: 49.99,
    date: '2024-01-05',
    status: 'Completed',
    type: 'Support',
  },
  {
    id: 5,
    description: 'Domain Registration',
    amount: 12.99,
    date: '2024-01-01',
    status: 'Completed',
    type: 'Domain',
  },
]

const paymentMethods = [
  {
    id: 1,
    type: 'Credit Card',
    last4: '4242',
    expiry: '12/25',
    brand: 'Visa',
    isDefault: true,
    icon: <CreditCard />,
  },
  {
    id: 2,
    type: 'Bank Account',
    last4: '1234',
    expiry: 'N/A',
    brand: 'Chase Bank',
    isDefault: false,
    icon: <AccountBalance />,
  },
  {
    id: 3,
    type: 'Payment',
    last4: 'N/A',
    expiry: 'N/A',
    brand: 'Payment',
    isDefault: false,
    icon: <Payment />,
  },
]

const billingStats = [
  {
    title: 'Current Balance',
    value: '$530.00',
    change: '+$45.50',
    trend: 'up',
    color: 'success.main',
  },
  {
    title: 'This Month',
    value: '$156.47',
    change: '+$23.12',
    trend: 'up',
    color: 'primary.main',
  },
  {
    title: 'Last Month',
    value: '$133.35',
    change: '-$12.45',
    trend: 'down',
    color: 'error.main',
  },
  {
    title: 'Total Spent',
    value: '$2,847.23',
    change: '+$156.47',
    trend: 'up',
    color: 'info.main',
  },
]

export default function Billing() {
  const theme = useTheme()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'success'
      case 'Pending':
        return 'warning'
      case 'Failed':
        return 'error'
      default:
        return 'default'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Subscription':
        return 'primary'
      case 'Add-on':
        return 'secondary'
      case 'Usage':
        return 'info'
      case 'Support':
        return 'warning'
      case 'Domain':
        return 'success'
      default:
        return 'default'
    }
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" mb={4} className="gradient-text">
        Billing & Payments
      </Typography>

      {/* Billing Statistics */}
      <Grid container spacing={3} mb={4}>
        {billingStats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent textAlign="center">
                  <Typography variant="h4" component="div" fontWeight={700} color={stat.color}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {stat.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={stat.trend === 'up' ? 'success.main' : 'error.main'}
                    fontWeight={500}
                  >
                    {stat.change}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Payment Methods */}
        <Grid item xs={12} lg={4}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="h6">Payment Methods</Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Add />}
                    sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    Add New
                  </Button>
                </Box>
                <List>
                  {paymentMethods.map((method, index) => (
                    <Box key={method.id}>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Avatar
                            sx={{
                              bgcolor: method.isDefault ? 'primary.main' : 'grey.600',
                              width: 40,
                              height: 40,
                            }}
                          >
                            {method.icon}
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Box display="flex" alignItems="center" gap={1}>
                              <Typography variant="body1" fontWeight={500}>
                                {method.type}
                              </Typography>
                              {method.isDefault && (
                                <Chip label="Default" size="small" color="primary" />
                              )}
                            </Box>
                          }
                          secondary={
                            <Typography variant="body2" color="text.secondary">
                              {method.brand} •••• {method.last4}
                              {method.expiry !== 'N/A' && ` • Expires ${method.expiry}`}
                            </Typography>
                          }
                        />
                      </ListItem>
                      {index < paymentMethods.length - 1 && <Divider />}
                    </Box>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Transaction History */}
        <Grid item xs={12} lg={8}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="h6">Transaction History</Typography>
                  <Box display="flex" gap={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Download />}
                      sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                    >
                      Export
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Visibility />}
                      sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                    >
                      View All
                    </Button>
                  </Box>
                </Box>
                <List>
                  {transactions.map((transaction, index) => (
                    <Box key={transaction.id}>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Avatar
                            sx={{
                              bgcolor: 'primary.main',
                              width: 40,
                              height: 40,
                            }}
                          >
                            <Receipt />
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                              <Typography variant="body1" fontWeight={500}>
                                {transaction.description}
                              </Typography>
                              <Typography variant="h6" color="primary.main" fontWeight={700}>
                                ${transaction.amount}
                              </Typography>
                            </Box>
                          }
                          secondary={
                            <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                              <Box display="flex" gap={1}>
                                <Chip
                                  label={transaction.type}
                                  size="small"
                                  color={getTypeColor(transaction.type)}
                                  variant="outlined"
                                />
                                <Chip
                                  label={transaction.status}
                                  size="small"
                                  color={getStatusColor(transaction.status)}
                                />
                              </Box>
                              <Typography variant="body2" color="text.secondary">
                                {transaction.date}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      {index < transactions.length - 1 && <Divider />}
                    </Box>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Current Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6" mb={3}>
              Current Plan
            </Typography>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="h5" fontWeight={700} mb={1}>
                    Premium Plan
                  </Typography>
                  <Typography variant="body1" color="text.secondary" mb={2}>
                    $99.99/month • Includes all features
                  </Typography>
                  <Box display="flex" gap={1}>
                    <Button
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #4318FF 0%, #6B46C1 100%)',
                      }}
                    >
                      Upgrade Plan
                    </Button>
                    <Button variant="outlined" sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                      Change Plan
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box textAlign="right">
                  <Typography variant="h3" fontWeight={700} color="primary.main">
                    $99.99
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    per month
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  )
}
