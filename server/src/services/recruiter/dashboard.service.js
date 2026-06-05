const model = require("../../models/recruiterDashboard");

const getDashboardData = async (recruiterId) => {
  const [
    totalJobs,
    activeJobs,
    pendingJobs,
    totalApplications,
    uniqueApplicants,
    allUsers,
    appliedUsers,
     recentJobs,
    recentApplicants
  ] = await Promise.all([
    model.getTotalJobsByRecruiter(recruiterId),
    model.getActiveJobs(recruiterId),
    model.getPendingJobs(recruiterId),
    model.getTotalApplications(recruiterId),
    model.getUniqueApplicants(recruiterId),
    model.getAllUsers(),
    model.getAppliedUsers(recruiterId),
    model.getRecentJobs(recruiterId),
    model.getRecentApplicants(recruiterId)
  ]);

  return {
    totalJobs,
    activeJobs,
    pendingJobs,
    totalApplications,
    uniqueApplicants,
    totalUsers: allUsers.length,
    allUsers,
    appliedUsers,
      recentJobs,
    recentApplicants,
  };
};

module.exports = {
  getDashboardData,
};