'use client';

import { useThreads } from '@/liveblocks.config';
import { useMaxZIndex } from '@/lib/useMaxZIndex';

import OverlayThread from './OverlayThread';

export const CommentsOverlay = () => {
  /**
   * We're using the useThreads hook to get the list of threads
   * in the room.
   *
   * useThreads: https://liveblocks.io/docs/api-reference/liveblocks-react#useThreads
   */
  const { threads } = useThreads();

  // get the max z-index of a thread
  const maxZIndex = useMaxZIndex();

  return (
    <div>
      {threads
        .filter((thread) => !thread.metadata.resolved)
        .map((thread) => (
          <OverlayThread
            key={thread.id}
            thread={thread}
            maxZIndex={maxZIndex}
          />
        ))}
    </div>
  );
};
