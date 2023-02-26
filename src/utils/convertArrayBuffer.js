export function useConvertBuffer(arr) {
    const uint8Array = new Uint8Array(arr);
    return new TextDecoder('utf-8').decode(uint8Array.buffer);
}