import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { VoiceButton } from '@/components/atoms/VoiceButton';
import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
  onVoiceStart?: () => void;
  onVoiceStop?: () => void;
  isRecording?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = "Describe what you need help with...",
  onVoiceStart,
  onVoiceStop,
  isRecording = false
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="relative flex items-center gap-3 w-full max-w-2xl">
      <div className="relative flex-1">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="h-14 pl-6 pr-14 text-lg rounded-2xl border-2 shadow-card focus:shadow-elegant focus:border-primary transition-smooth"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={onSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl hover:bg-primary hover:text-primary-foreground"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
      
      {onVoiceStart && onVoiceStop && (
        <VoiceButton
          onStartRecording={onVoiceStart}
          onStopRecording={onVoiceStop}
          isRecording={isRecording}
        />
      )}
    </div>
  );
};