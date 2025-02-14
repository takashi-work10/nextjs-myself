// global.d.ts
declare global {
    // globalThis に mongoose というプロパティがあると教えます。
    var mongoose: {
      conn: any;
      promise: any;
    } | undefined;
  }
  
  export {}; // このファイルをモジュールとして扱うため
  