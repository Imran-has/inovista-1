'use client'

import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Grid,
  Avatar,
  useTheme,
} from '@mui/material'
import {
  Search,
  Edit,
  Delete,
  Add,
  FilterList,
  Download,
  Visibility,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Sample data
const tableData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-01-15',
    avatar: 'JD',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'Active',
    lastLogin: '2024-01-14',
    avatar: 'JS',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Moderator',
    status: 'Inactive',
    lastLogin: '2024-01-10',
    avatar: 'BJ',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'User',
    status: 'Active',
    lastLogin: '2024-01-13',
    avatar: 'AB',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-01-12',
    avatar: 'CW',
  },
]

const statusColors = {
  Active: 'success',
  Inactive: 'error',
  Pending: 'warning',
}

const roleColors = {
  Admin: 'primary',
  User: 'default',
  Moderator: 'secondary',
}

export default function Tables() {
  const [searchTerm, setSearchTerm] = useState('')
  const theme = useTheme()

  const filteredData = tableData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Box>
      <Typography variant="h4" component="h1" mb={4} className="gradient-text">
        Data Tables
      </Typography>

      {/* Actions Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display="flex" gap={2} justifyContent="flex-end">
                  <Button
                    variant="outlined"
                    startIcon={<FilterList />}
                    sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    Filter
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Download />}
                    sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    Export
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    sx={{
                      background: 'linear-gradient(135deg, #4318FF 0%, #6B46C1 100%)',
                    }}
                  >
                    Add User
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardContent>
            <Typography variant="h6" mb={3}>
              Users Management
            </Typography>
            <TableContainer component={Paper} sx={{ background: 'transparent' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      User
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      Role
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      Status
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      Last Login
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.05)',
                        },
                      }}
                    >
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Avatar
                            sx={{
                              bgcolor: 'primary.main',
                              width: 40,
                              height: 40,
                            }}
                          >
                            {row.avatar}
                          </Avatar>
                          <Box>
                            <Typography variant="body1" fontWeight={500}>
                              {row.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {row.email}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.role}
                          color={roleColors[row.role as keyof typeof roleColors]}
                          size="small"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          color={statusColors[row.status as keyof typeof statusColors]}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {row.lastLogin}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" gap={1}>
                          <IconButton
                            size="small"
                            sx={{ color: 'primary.main' }}
                          >
                            <Visibility fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            sx={{ color: 'warning.main' }}
                          >
                            <Edit fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            sx={{ color: 'error.main' }}
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Statistics Cards */}
      <Grid container spacing={3} mt={4}>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent textAlign="center">
                <Typography variant="h4" component="div" fontWeight={700} color="primary.main">
                  {tableData.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Users
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent textAlign="center">
                <Typography variant="h4" component="div" fontWeight={700} color="success.main">
                  {tableData.filter(user => user.status === 'Active').length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Users
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent textAlign="center">
                <Typography variant="h4" component="div" fontWeight={700} color="warning.main">
                  {tableData.filter(user => user.role === 'Admin').length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Admin Users
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card>
              <CardContent textAlign="center">
                <Typography variant="h4" component="div" fontWeight={700} color="info.main">
                  {tableData.filter(user => user.role === 'User').length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Regular Users
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  )
}
