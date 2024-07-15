{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ (final: prev: { nodejs = prev.nodejs_18; }) ];
        pkgs = import nixpkgs { inherit overlays system; };
      in { devShell = with pkgs; mkShell { buildInputs = [ nodejs yarn ]; }; });
}
