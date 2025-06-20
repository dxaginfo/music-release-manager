import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Chip, 
  Box, 
  Avatar, 
  LinearProgress, 
  Stack,
  Divider
} from '@mui/material';
import { format } from 'date-fns';

// Status colors
const statusColors = {
  planning: 'info',
  in_progress: 'warning',
  completed: 'success'
};

// Progress calculation helper
const calculateProgress = (tasks) => {
  if (!tasks || tasks.length === 0) return 0;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  return (completedTasks / tasks.length) * 100;
};

const CampaignCard = ({ campaign }) => {
  const navigate = useNavigate();
  
  const { 
    _id, 
    title, 
    artist, 
    releaseType, 
    releaseDate, 
    status, 
    coverArt, 
    tasks 
  } = campaign;
  
  const progress = calculateProgress(tasks);
  
  const handleClick = () => {
    navigate(`/campaigns/${_id}`);
  };
  
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {coverArt ? (
        <Box 
          sx={{
            height: 160,
            backgroundImage: `url(${coverArt})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ) : (
        <Box 
          sx={{
            height: 160,
            bgcolor: 'primary.light',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" color="white">
            {artist} - {title}
          </Typography>
        </Box>
      )}
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip 
            label={status.replace('_', ' ')} 
            color={statusColors[status]} 
            size="small" 
          />
          <Chip 
            label={releaseType} 
            variant="outlined" 
            size="small" 
          />
        </Box>
        
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {artist}
        </Typography>
        
        <Divider sx={{ my: 1.5 }} />
        
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Release Date:
          </Typography>
          <Typography variant="body2" fontWeight="medium">
            {format(new Date(releaseDate), 'MMM dd, yyyy')}
          </Typography>
        </Stack>
        
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="body2">Progress</Typography>
            <Typography variant="body2">{Math.round(progress)}%</Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ height: 8, borderRadius: 4 }} 
          />
        </Box>
      </CardContent>
      
      <CardActions>
        <Button size="small" onClick={handleClick}>View Details</Button>
      </CardActions>
    </Card>
  );
};

export default CampaignCard;