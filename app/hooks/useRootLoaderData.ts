import {useMatches} from '@remix-run/react';
import type {SerializeFrom} from '@shopify/remix-oxygen';

/**
 * Access the result of the root loader from a React component.
 */
export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data as SerializeFrom<any>;
};
