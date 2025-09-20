'use client'

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  useTheme,
} from '@mui/material'
import {
  TrendingUp,
  TrendingDown,
  People,
  AttachMoney,
  ShoppingCart,
  Visibility,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const data = [
  { name: 'Jan', value: 400, users: 2400, sales: 2400 },
  { name: 'Feb', value: 300, users: 1398, sales: 2210 },
  { name: 'Mar', value: 200, users: 9800, sales: 2290 },
  { name: 'Apr', value: 278, users: 3908, sales: 2000 },
  { name: 'May', value: 189, users: 4800, sales: 2181 },
  { name: 'Jun', value: 239, users: 3800, sales: 2500 },
  { name: 'Jul', value: 349, users: 4300, sales: 2100 },
]

const pieData = [
  { name: 'Desktop', value: 400, color: '#4318FF' },
  { name: 'Mobile', value: 300, color: '#6B46C1' },
  { name: 'Tablet', value: 200, color: '#A3AED0' },
]

const statsCards = [
  {
    title: 'Total Users',
    value: '23,000',
    change: '+3.5%',
    trend: 'up',
    icon: <People />,
    color: '#4318FF',
  },
  {
    title: 'Total Sales',
    value: '$530,000',
    change: '+2.1%',
    trend: 'up',
    icon: <AttachMoney />,
    color: '#6B46C1',
  },
  {
    title: 'Total Orders',
    value: '93,000',
    change: '-1.2%',
    trend: 'down',
    icon: <ShoppingCart />,
    color: '#A3AED0',
  },
  {
    title: 'Total Views',
    value: '2.3M',
    change: '+12.5%',
    trend: 'up',
    icon: <Visibility />,
    color: '#4318FF',
  },
]

export default function DashboardHome() {
  const theme = useTheme()

  return (
    <Box>
      <Typography variant="h4" component="h1" mb={4} className="gradient-text">
        Dashboard Overview
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} mb={4}>
        {statsCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  background: 'linear-gradient(135deg, #1A2332 0%, #2D3748 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                    <Box>
                      <Typography color="text.secondary" variant="body2" mb={1}>
                        {card.title}
                      </Typography>
                      <Typography variant="h4" component="div" fontWeight={700} mb={1}>
                        {card.value}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={1}>
                        {card.trend === 'up' ? (
                          <TrendingUp color="success" fontSize="small" />
                        ) : (
                          <TrendingDown color="error" fontSize="small" />
                        )}
                        <Typography
                          variant="body2"
                          color={card.trend === 'up' ? 'success.main' : 'error.main'}
                        >
                          {card.change}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        background: `${card.color}20`,
                        color: card.color,
                      }}
                    >
                      {card.icon}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} mb={4}>
        {/* Line Chart */}
        <Grid item xs={12} lg={8}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6" mb={3}>
                  Sales Overview
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.7)" />
                    <YAxis stroke="rgba(255,255,255,0.7)" />
                    <Tooltip
                      contentStyle={{
                        background: 'rgba(26, 35, 50, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#4318FF"
                      strokeWidth={3}
                      dot={{ fill: '#4318FF', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} lg={4}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6" mb={3}>
                  Device Usage
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: 'rgba(26, 35, 50, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Bottom Charts */}
      <Grid container spacing={3}>
        {/* Area Chart */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6" mb={3}>
                  User Growth
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.7)" />
                    <YAxis stroke="rgba(255,255,255,0.7)" />
                    <Tooltip
                      contentStyle={{
                        background: 'rgba(26, 35, 50, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#6B46C1"
                      fill="url(#colorGradient)"
                      strokeWidth={2}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6B46C1" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#6B46C1" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6" mb={3}>
                  Monthly Performance
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.7)" />
                    <YAxis stroke="rgba(255,255,255,0.7)" />
                    <Tooltip
                      contentStyle={{
                        background: 'rgba(26, 35, 50, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="value" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4318FF" />
                        <stop offset="95%" stopColor="#6B46C1" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Floating Jellyfish Graphic */}
      <Box
        sx={{
          position: 'fixed',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          opacity: 0.1,
          pointerEvents: 'none',
          zIndex: -1,
        }}
        className="float"
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, #4318FF 0%, #6B46C1 50%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
        />
      </Box>
    </Box>
  )
}
