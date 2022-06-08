// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

contract Certi {
    address admin;

    uint256 public certificateCount;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Insuficient privilage");
        _;
    }

    struct certificate {
        uint256 certificateId;
        string courseName;
        string candidateName;
        string grade;
        string date;
    }

    mapping(uint256 => certificate) public certificateDetails;

    function newCertificate(
        string memory _courseName,
        string memory _candidateName,
        string memory _grade,
        string memory _date
    ) public onlyAdmin {
        certificateCount += 1;
        certificateDetails[certificateCount] = certificate(
            certificateCount,
            _courseName,
            _candidateName,
            _grade,
            _date
        );
    }
}
