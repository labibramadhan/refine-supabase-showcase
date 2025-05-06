module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    // React rules
    'react/react-in-jsx-scope': 'off', // Not needed in Next.js
    'react/jsx-props-no-spreading': 'off', // Allow prop spreading for Refine & Ant Design
    'react/require-default-props': 'off', // TypeScript handles this
    'react/prop-types': 'off', // TypeScript handles this
    
    // Import rules
    'import/prefer-default-export': 'off', // Allow named exports 
    'import/extensions': 'off', // Not needed with TypeScript
    'import/no-extraneous-dependencies': 'off', // Monorepo compatibility
    
    // TypeScript rules
    '@typescript-eslint/no-unused-vars': ['error', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      ignoreRestSiblings: true 
    }],
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // Changed to warn to allow gradual cleanup
    
    // General rules
    'max-len': ['warn', { code: 120 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  ignorePatterns: [
    '.next/**/*',
    'node_modules/**/*',
    'public/**/*',
    'out/**/*',
    '*.config.js',
  ],
};
