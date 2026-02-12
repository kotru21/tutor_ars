import Link from 'next/link';

import { pluralize } from '@/shared/lib';
import { type Grade } from '@/shared/types';
import { Card } from '@/shared/ui';

interface GradeCardProps {
  grade: Grade;
  lessonsCount: number;
  isLocked?: boolean;
}

export function GradeCard({ grade, lessonsCount, isLocked = false }: GradeCardProps) {
  const content = (
    <>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-bold text-heading">{grade.name}</h3>
        {isLocked && <span className="text-xl">🔒</span>}
      </div>
      <p className="text-sm text-gray-600">
        {lessonsCount} {pluralize(lessonsCount, 'тема', 'темы', 'тем')}
      </p>
    </>
  );

  if (isLocked) {
    return (
      <Card className="cursor-not-allowed opacity-60">
        {content}
        <p className="mt-2 text-xs text-gray-500">Войдите для доступа</p>
      </Card>
    );
  }

  return (
    <Link href={`/grade/${grade.slug}`} className="block">
      <Card className="hover:-translate-y-1 hover:shadow-lg">{content}</Card>
    </Link>
  );
}
