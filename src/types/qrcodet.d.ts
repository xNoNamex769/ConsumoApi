declare module 'qrcode' {
  export function toDataURL(text: string): Promise<string>;
}
