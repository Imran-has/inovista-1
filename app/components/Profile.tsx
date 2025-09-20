'use client'

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Button,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  FormControlLabel,
  Chip,
  useTheme,
} from '@mui/material'
import {
  Person,
  Email,
  Phone,
  LocationOn,
  Edit,
  Save,
  Cancel,
  Notifications,
  Security,
  Language,
  Palette,
  Download,
  Delete,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Sample user data
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, NY',
  role: 'Administrator',
  joinDate: 'January 2023',
  avatar: 'JD',
  bio: 'Full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies.',
}

const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'GraphQL']

const activityLog = [
  {
    id: 1,
    action: 'Profile updated',
    timestamp: '2 hours ago',
    type: 'update',
  },
  {
    id: 2,
    action: 'Password changed',
    timestamp: '1 day ago',
    type: 'security',
  },
  {
    id: 3,
    action: 'Login from new device',
    timestamp: '3 days ago',
    type: 'login',
  },
  {
    id: 4,
    action: 'Billing information updated',
    timestamp: '1 week ago',
    type: 'billing',
  },
]

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(userData)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  })
  const theme = useTheme()

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  const handleCancel = () => {
    setFormData(userData)
    setIsEditing(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'update':
        return <Edit color="primary" />
      case 'security':
        return <Security color="warning" />
      case 'login':
        return <Person color="info" />
      case 'billing':
        return <Download color="success" />
      default:
        return <Person />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'update':
        return 'primary'
      case 'security':
        return 'warning'
      case 'login':
        return 'info'
      case 'billing':
        return 'success'
      default:
        return 'default'
    }
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" mb={4} className="gradient-text">
        Profile Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Header */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" gap={3} mb={3}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      fontSize: '3rem',
                      bgcolor: 'primary.main',
                    }}
                  >
                    {userData.avatar}
                  </Avatar>
                  <Box flex={1}>
                    <Typography variant="h4" fontWeight={700} mb={1}>
                      {userData.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" mb={2}>
                      {userData.role}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={2}>
                      {userData.bio}
                    </Typography>
                    <Box display="flex" gap={2}>
                      <Button
                        variant="contained"
                        startIcon={isEditing ? <Save /> : <Edit />}
                        onClick={isEditing ? handleSave : () => setIsEditing(true)}
                        sx={{
                          background: 'linear-gradient(135deg, #4318FF 0%, #6B46C1 100%)',
                        }}
                      >
                        {isEditing ? 'Save Changes' : 'Edit Profile'}
                      </Button>
                      {isEditing && (
                        <Button
                          variant="outlined"
                          startIcon={<Cancel />}
                          onClick={handleCancel}
                          sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        >
                          Cancel
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Profile Information */}
        <Grid item xs={12} lg={8}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6" mb={3}>
                  Personal Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      disabled={!isEditing}
                      InputProps={{
                        startAdornment: (
                          <Box sx={{ mr: 1, color: 'text.secondary' }}>
                            <Person />
                          </Box>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={!isEditing}
                      InputProps={{
                        startAdornment: (
                          <Box sx={{ mr: 1, color: 'text.secondary' }}>
                            <Email />
                          </Box>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      disabled={!isEditing}
                      InputProps={{
                        startAdornment: (
                          <Box sx={{ mr: 1, color: 'text.secondary' }}>
                            <Phone />
                          </Box>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      disabled={!isEditing}
                      InputProps={{
                        startAdornment: (
                          <Box sx={{ mr: 1, color: 'text.secondary' }}>
                            <LocationOn />
                          </Box>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Bio"
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      disabled={!isEditing}
                      multiline
                      rows={3}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6" mb={3}>
                  Skills & Expertise
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      color="primary"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} lg={4}>
          {/* Account Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" mb={3}>
                  Account Information
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Member Since"
                      secondary={userData.joinDate}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Account Status"
                      secondary={
                        <Chip label="Active" color="success" size="small" />
                      }
                    />
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Last Login"
                      secondary="2 hours ago"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" mb={3}>
                  Notifications
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Email />
                    </ListItemIcon>
                    <ListItemText primary="Email Notifications" />
                    <Switch
                      checked={notifications.email}
                      onChange={(e) => setNotifications(prev => ({ ...prev, email: e.target.checked }))}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Notifications />
                    </ListItemIcon>
                    <ListItemText primary="Push Notifications" />
                    <Switch
                      checked={notifications.push}
                      onChange={(e) => setNotifications(prev => ({ ...prev, push: e.target.checked }))}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Phone />
                    </ListItemIcon>
                    <ListItemText primary="SMS Notifications" />
                    <Switch
                      checked={notifications.sms}
                      onChange={(e) => setNotifications(prev => ({ ...prev, sms: e.target.checked }))}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6" mb={3}>
                  Recent Activity
                </Typography>
                <List>
                  {activityLog.map((activity) => (
                    <ListItem key={activity.id} sx={{ px: 0 }}>
                      <ListItemIcon>
                        {getActivityIcon(activity.type)}
                      </ListItemIcon>
                      <ListItemText
                        primary={activity.action}
                        secondary={activity.timestamp}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card sx={{ mt: 4, border: '1px solid #ef4444' }}>
          <CardContent>
            <Typography variant="h6" color="error" mb={3}>
              Danger Zone
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Once you delete your account, there is no going back. Please be certain.
            </Typography>
            <Button
              variant="outlined"
              color="error"
              startIcon={<Delete />}
              sx={{ borderColor: '#ef4444' }}
            >
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Floating Brain Graphic */}
      <Box
        sx={{
          position: 'fixed',
          bottom: '10%',
          left: '5%',
          width: '150px',
          height: '150px',
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
            background: 'radial-gradient(circle, #6B46C1 0%, #4318FF 50%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
        />
      </Box>
    </Box>
  )
}
