export function decode(input: string) {
    let plain = '';
    for (var i = 0; i < input.length; i++) {
      plain += String.fromCharCode(input.charCodeAt(i) % 256);
    }
    return decodeURIComponent(escape(plain));
  }