import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Button, 
  Container, 
  Divider,
  Stack,
  Card,
  CardContent,
  Avatar,
  CircularProgress
} from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  Add as AddIcon,
  MusicNote as MusicNoteIcon,
  Task as TaskIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// Components
import CampaignCard from '../components/dashboard/CampaignCard';
import TaskList from '../components/dashboard/TaskList';
import StatsCard from '../components/dashboard/StatsCard';
import UpcomingReleases from '../components/dashboard/UpcomingReleases';

// Redux actions
import { fetchActiveCampaigns } from '../redux/slices/campaignSlice';
import { fetchUpcomingTasks } from '../redux/slices/taskSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { campaigns, loading: campaignsLoading } = useSelector((state) => state.campaigns);
  const { tasks, loading: tasksLoading } = useSelector((state) => state.tasks);
  
  useEffect(() => {
    dispatch(fetchActiveCampaigns());
    dispatch(fetchUpcomingTasks());
  }, [dispatch]);
  
  // Stats for the dashboard
  const stats = [
    {
      title: 'Active Campaigns',
      value: campaigns.filter(c => c.status === 'in_progress').length,
      icon: <MusicNoteIcon />,
      color: '#3f51b5'
    },
    {
      title: 'Upcoming Tasks',
      value: tasks.filter(t => t.status !== 'completed').length,
      icon: <TaskIcon />,
      color: '#f50057'
    },
    {
      title: 'Completed Tasks',
      value: tasks.filter(t => t.status === 'completed').length,
      icon: <AssessmentIcon />,
      color: '#4caf50'
    }
  ];
  
  // Get latest 3 campaigns
  const recentCampaigns = [...campaigns]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 3);
  
  // Get upcoming tasks (due in next 7 days)
  const upcomingTasks = tasks
    .filter(task => task.status !== 'completed' && new Date(task.dueDate) > new Date())
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5);
  
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          startIcon={<AddIcon />}
          component={RouterLink}
          to="/campaigns/new"
        >
          New Campaign
        </Button>
      </Box>
      
      {/* Stats row */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <StatsCard 
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          </Grid>
        ))}
      </Grid>
      
      <Grid container spacing={4}>
        {/* Recent Campaigns */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Recent Campaigns</Typography>
              <Button 
                component={RouterLink} 
                to="/campaigns"
                size="small"
              >
                View All
              </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />
            
            {campaignsLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
              </Box>
            ) : recentCampaigns.length > 0 ? (
              <Grid container spacing={3}>
                {recentCampaigns.map((campaign) => (
                  <Grid item xs={12} sm={6} md={4} key={campaign._id}>
                    <CampaignCard campaign={campaign} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography color="textSecondary">
                  No campaigns found. Create your first campaign!
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  startIcon={<AddIcon />}
                  component={RouterLink}
                  to="/campaigns/new"
                  sx={{ mt: 2 }}
                >
                  Create Campaign
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
        
        {/* Upcoming Tasks */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Upcoming Tasks</Typography>
              <Button 
                component={RouterLink} 
                to="/tasks"
                size="small"
              >
                View All
              </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />
            
            {tasksLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
              </Box>
            ) : upcomingTasks.length > 0 ? (
              <TaskList tasks={upcomingTasks} />
            ) : (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography color="textSecondary">
                  No upcoming tasks found.
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;