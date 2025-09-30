import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';

interface VoiceButtonProps {
  onStartRecording: () => void;
  onStopRecording: () => void;
  isRecording: boolean;
  disabled?: boolean;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({
  onStartRecording,
  onStopRecording,
  isRecording,
  disabled = false
}) => {
  const handleClick = () => {
    if (isRecording) {
      onStopRecording();
    } else {
      onStartRecording();
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      disabled={disabled}
      className={`h-14 w-14 rounded-full transition-smooth border-2 ${
        isRecording 
          ? 'bg-destructive text-destructive-foreground animate-pulse shadow-elegant border-destructive' 
          : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant border-primary/20'
      }`}
      aria-label={isRecording ? 'Detener grabación' : 'Iniciar grabación de voz'}
    >
      {isRecording ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
    </Button>
  );
};