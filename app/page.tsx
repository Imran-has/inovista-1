'use client'

import { useState } from 'react'
import { Box, Container, Paper, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'

export default function Home() {
  const [currentView, setCurrentView] = useState<'signin' | 'signup' | 'dashboard'>('signin')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleSignIn = (email: string, password: string) => {
    // Simulate authentication
    if (email && password) {
      setIsAuthenticated(true)
      setCurrentView('dashboard')
    }
  }

  const handleSignUp = (name: string, email: string, password: string) => {
    // Simulate registration
    if (name && email && password) {
      setIsAuthenticated(true)
      setCurrentView('dashboard')
    }
  }

  const handleSignOut = () => {
    setIsAuthenticated(false)
    setCurrentView('signin')
  }

  if (isAuthenticated && currentView === 'dashboard') {
    return <Dashboard onSignOut={handleSignOut} />
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #111C44 0%, #1A2332 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, #4318FF 0%, #6B46C1 100%)',
          borderRadius: '50%',
          opacity: 0.1,
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, #6B46C1 0%, #4318FF 100%)',
          borderRadius: '50%',
          opacity: 0.1,
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={24}
            sx={{
              p: 4,
              borderRadius: 4,
              background: 'rgba(26, 35, 50, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <Box textAlign="center" mb={4}>
              <Typography
                variant="h3"
                component="h1"
                className="gradient-text"
                sx={{ mb: 1, fontWeight: 700 }}
              >
                Vision UI
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Dashboard React
              </Typography>
            </Box>

            {/* View switcher */}
            <Box display="flex" justifyContent="center" mb={3}>
              <Button
                variant={currentView === 'signin' ? 'contained' : 'text'}
                onClick={() => setCurrentView('signin')}
                sx={{ mr: 2 }}
              >
                Sign In
              </Button>
              <Button
                variant={currentView === 'signup' ? 'contained' : 'text'}
                onClick={() => setCurrentView('signup')}
              >
                Sign Up
              </Button>
            </Box>

            {/* Content */}
            {currentView === 'signin' && (
              <SignIn onSignIn={handleSignIn} onSwitchToSignUp={() => setCurrentView('signup')} />
            )}
            {currentView === 'signup' && (
              <SignUp onSignUp={handleSignUp} onSwitchToSignIn={() => setCurrentView('signin')} />
            )}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}
