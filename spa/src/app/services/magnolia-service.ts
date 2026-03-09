import { MGNL_BASE_AUTHOR, MGNL_BASE_PUBLIC } from '@/environments/environment';
import {
  IMagnoliaContext,
  MgnlContent,
  MgnlTemplateAnnotations,
} from '@magnolia/frontend-helpers-base';
import { headers } from 'next/headers';

export async function fetchPageContent(
  magnoliaContext: IMagnoliaContext,
  pageBase: string
): Promise<MgnlContent> {
  const referer = (await headers()).get('referer')?.toLowerCase() || '';

  const headerList = await headers();

  const currentUrl = headerList.get('x-current-url');

  console.log('currentUrl', currentUrl);

  
  const pagesRes = await fetch(
    pageBase + magnoliaContext.nodePath + magnoliaContext.search
  );
  return (await pagesRes.json()) as MgnlContent;
}

export async function fetchPageNav(
  nodeName: string,
  navBase: string
): Promise<MgnlContent> {
  const pageNavRes = await fetch(navBase + nodeName);
  return (await pageNavRes.json()) as MgnlContent;
}

export async function fetchTemplateAnnotations(
  magnoliaContext: IMagnoliaContext,
  templateAnnotationsBase: string
): Promise<MgnlTemplateAnnotations | undefined> {
  if (magnoliaContext.isMagnolia) {
    const templateAnnotationsRes = await fetch(
      templateAnnotationsBase +
        magnoliaContext.nodePath +
        magnoliaContext.search
    );
    return (await templateAnnotationsRes.json()) as MgnlTemplateAnnotations;
  }
}
