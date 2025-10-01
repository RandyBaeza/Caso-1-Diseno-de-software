import { SearchBar } from '../molecules/SearchBar';
import { CoachList } from '../organisms/CoachList';
import type { Coach } from '../../models/Coach';

interface TemplateProps {
  coaches: Coach[];
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  onSelectCoach: (coach: Coach) => void;
}

export const CoachSearchTemplate: React.FC<TemplateProps> = ({ coaches, searchTerm, setSearchTerm, onSelectCoach }) => (
  <div className="p-4">
    <SearchBar value={searchTerm} onChange={setSearchTerm} onSearch={() => {}} />
    <CoachList coaches={coaches} onSelect={onSelectCoach} />
  </div>
);
