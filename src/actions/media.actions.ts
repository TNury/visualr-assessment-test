'use server';

import { UploadFile } from '@vat/types/queries.types';

const apiURL = process.env.NEXT_PUBLIC_cmsUrl;

interface UploadedFileProps extends UploadFile {
  id: number;
}

export type JSONEndpointErrorProps = {
  details: Record<string, any>;
  message: string;
  name: string;
  status: number;
};

type UploadFileErrorProps = {
  data: null;
  error?: JSONEndpointErrorProps;
};

type UploadMediaResponseProps = UploadedFileProps[] & UploadFileErrorProps;

/**
 * Uploads a media file to the server.
 * @param file The media file to upload.
 * @returns A Promise that resolves with the response from the server.
 */
export async function uploadMedia(
  file: FormData
): Promise<UploadMediaResponseProps> {
  const response = await fetch(`${apiURL}/api/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_strapiKey}`,
    },
    body: file,
    cache: 'no-cache',
  });

  return await response.json();
}

/**
 * Deletes a media file from the server.
 * @param id The ID of the media file to delete.
 * @returns A Promise that resolves with the response from the server.
 */
export async function deleteMedia(
  id: string
): Promise<UploadMediaResponseProps> {
  const response = await fetch(`${apiURL}/api/upload/files/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_strapiKey}`,
    },
    cache: 'no-cache',
  });

  return await response.json();
}
